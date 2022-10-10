# homework

```
    git init
    // 깃헙과 연결
    git remote add origin https://github.com/dhkim0835/homework.git

    // 브랜치 이름 변경
    git branch -m master main
```

#### express setting

- yarn add express
- yarn add -g typescript
- yarn add express
- yarn add nodemon --dev
- yarn add typescript --dev
- yarn add @types/express --dev
- yarn add @types/node --dev
- yarn add ts-node --dev

##### PPA Personal Package Archive

- 런치패드에서 제공하는 우분투의 공식 패키지 저장소에 없는 서드파티 소프트웨어를 위한 개인용 소프트웨어 패키지 저장소이다.
- 단순히 소프트웨어의 패키지를 저장할 뿐 아니라 해당 소프트웨어의 업데이트 기능도 제공한다.

- sudo curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash
- sudo apt-get install -y nodejs
- sudu apt-get update && sudo apt-get install yarn

##### 우분투 전역 환경 변수

- 환경 변수 등록
- export [환경변수]=[환경변수 내용]

- 환경 변수 삭제
- unset [환경 변수]

- 재부팅시 환경 변수 자동 적용
- vi /etc/bash.bashrc
- /etc/bash.bashrc은 우분투가 로그인 될 때 자동으로 먼저 실행되는 파일이다.

**troubleshooting**

- vi 편집기로 홈 디렉토리에 위치한 .bashrc 파일 열고 마지막 줄에 추가
- export PATH=$PATH:/home/jang/.local/bin
- readonly 파일이라 안 된다면 sudo -s root로 연결하여 수정 할 수 있다

#### troubleshooting

- ubuntu에서 !5는 printenv다..
- \!5 하니까 나온다. => !5가 mongo url에 포함되어 있어 printenv로 입력이 되었다.

##### ubuntu pem키 없이 login password 하기

- sudo vi /etc/ssh/sshd_config
- PasswordAuthentication yes
- sudo su
- passwd ubuntu => passwd 변경
- sudo service ssh restart
- -i "~~.pem" 없이 작성 => 로그인 됨

##### 리눅스 열린 포트 찾아 죽이기

- sudo apt install nmap
- nmap localhost

- sudo apt install psmisc
- fuser -k [열린 포트]/tcp

##### 우분투 노드 설치

- curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash
- sudo apt-get install -y nodejs

npm 설치

- sudo apt install npm

설치가 안 될때 이렇게 해보자!
sudo npm install -g <ModuleName> --unsafe-perm=true --allow-root

npm install -g pm2

