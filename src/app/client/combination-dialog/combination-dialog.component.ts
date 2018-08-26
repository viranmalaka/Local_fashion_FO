import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CombinationDetailsApi, UserApi} from '../../lb-services/services/custom';
import {LoopBackAuth} from '../../lb-services/services/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/take';
import {ToasterService} from 'angular2-toaster';

declare var $: any;

@Component({
  selector: 'app-combination-dialog',
  templateUrl: './combination-dialog.component.html',
  styleUrls: ['./combination-dialog.component.scss']
})
export class CombinationDialogComponent implements OnInit {

  @ViewChild('modalBackground', {read: ElementRef}) public modalbackground: ElementRef;

  imageIndex = 0;
  images = [];
  combList = [];
  currentIndex = 0;

  commentLoaded = false;
  fbComments = [];
  details;
  comment = '';
  show = false;
  authMsg = false;

  constructor(private combApi: CombinationDetailsApi, private http: HttpClient, private userApi: UserApi,
              private auth: LoopBackAuth, private toastr: ToasterService) {
  }

  ngOnInit() {

  }

  trigger(id1, id2, theme, combList = null) {
    this.commentLoaded = false;
    if (combList) {
      this.combList = combList;
      for (let i = 0; i < combList.length; i++) {
        if (combList[i].i1 === id1 && combList[i].i2 === id2) {
          this.currentIndex = i;
          break;
        }
      }
    }
    this.show = true;
    this.combApi.findOne({where: {id_1: id1, id_2: id2}}).take(1).subscribe(comDetails => {
      if (comDetails) {
        this.details = comDetails;
        this.http.get(environment.fbCommentPath + this.details.fb_id).take(1).subscribe(res => {
          if (res['data']) {
            if (res['data']['error']) {
              console.log(res['data']['error']);
            } else {
              this.fbComments = res['data']['data'];
              console.log(res);
              this.commentPreprocess();
              this.commentLoaded = true;
            }
          }
        });
      }
    });
    console.log(id1, id2);
    this.images = [
      `../../../assets/images/${theme}/combinations/${id1}_${id2}_M_A_fullsized.jpg`,
      `../../../assets/images/${theme}/combinations/${id1}_${id2}_M_B_fullsized.jpg`,
      `../../../assets/images/${theme}/combinations/${id1}_${id2}_M_C_fullsized.jpg`,
      // `../../../assets/images/${theme}/combinations/${id1}_${id2}_M_D_fullsized.jpg`,
    ];
    setTimeout(() => {
      $('.tile').on('mousemove', function (e) {
        $(this).children('.photo').css({
          'transform-origin': ((e.pageX -
            $(this).offset().left) / $(this).width()) * 100 + '% ' +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
        });
      });
    }, 200);
    this.comment = '';
  }

  postComment() {
    let lComment = this.comment;
    if (lComment === undefined || lComment === '') {
      // this.msgShow = true;
      // this.msg = 'Comment is empty !';
      this.toastr.pop('warning', 'Comment is empty !');
    } else {
      if (this.userApi.isAuthenticated() || this.authMsg) {
        console.log(this.auth.getToken());
        if (this.userApi.getCurrentToken().user && this.userApi.getCurrentToken().user.fullname) {
          lComment = lComment + '\n _by ';
          lComment = lComment + this.userApi.getCurrentToken().user.fullname;
        }
        this.http.post(environment.fbCommentPath,
          {fb_id: this.details.fb_id, message: lComment}).take(1).subscribe(postRes => {
          if (postRes && postRes['data'].id) {
            this.http.get(environment.fbCommentPath + this.details.fb_id).take(1).subscribe(res => {
              if (res['data']) {
                if (res['data']['error']) {
                  console.log(res['data']['error']);
                } else {
                  this.fbComments = res['data']['data'];
                  this.commentPreprocess();
                  this.commentLoaded = true;
                  // this.msgShow = false;
                  this.toastr.pop('warning', 'Posted your comment. Thank you.');
                }
              }

            });
            this.comment = '';
          } else {
            console.log(postRes);
          }
        });
      } else {
        // this.msg = 'You are not logged in. If you logged in we can publish the comment with your name. ' +
        //   '<br>If you log in with \'Facebook\' account we can mention your name with the comment. ' +
        //   '<br>Press send button again if you want to publish the comment anonymous';
        // this.msgShow = true;
        this.authMsg = true;
        this.toastr.pop('warning', 'Not logged in', 'we can use your name to post the comment in Facebook' +
          'if you are logged in.\n' +
          'we can mention your name in the comment if you are logged in with facebook' +
          '\n Post comment anonymously, press send button.');
      }
    }
  }

  private commentPreprocess() {
    if (this.fbComments) {
      this.fbComments.forEach(c => {
        if (c.from) {
          if (c.from.name === 'Soxplay_dev') {
            c.from.website = true;
            const split = c.message.split('_by');
            if (split.length > 1) {
              c.from.name = split[split.length - 1];
            } else {
              c.from.name = 'anonymous';
            }
            c.message = split[0];
          }
        } else {
          c.from = {website: true, name: 'anonymous'};
        }
      });
    }
  }

  navCombination(dir) {
    if (dir && this.currentIndex !== this.combList.length - 1) {
      for (let i = this.currentIndex + 1; i < this.combList.length; i++) {
        if (this.combList[i].visible) {
          this.trigger(this.combList[i].i1, this.combList[i].i2, this.combList[i].theme);
          this.currentIndex = i;
          break;
        }
      }
    } else {
      if (this.currentIndex !== 0) {
        for (let i = this.currentIndex - 1; i > -1; i--) {
          if (this.combList[i].visible) {
            this.trigger(this.combList[i].i1, this.combList[i].i2, this.combList[i].theme);
            this.currentIndex = i;
            break;
          }
        }
      }
    }
  }

  backgroundClose(event) {
    if (event.target === this.modalbackground.nativeElement) {
      this.show = false;
    }
  }
}
