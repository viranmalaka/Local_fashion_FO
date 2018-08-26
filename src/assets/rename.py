import glob, os

def rename(dir, pattern, titlePattern):
    for pathAndFilename in glob.iglob(os.path.join(dir, pattern)):
        title, ext = os.path.splitext(os.path.basename(pathAndFilename))
        title = title.replace('12_', '20_')
        print(os.path.join(dir, title + ext))
        os.rename(pathAndFilename,
                  os.path.join(dir, title + ext))

print(os.getcwd())
rename(os.getcwd() + '/images/2/combinations', r'*.jpg', r'new(%s)')
