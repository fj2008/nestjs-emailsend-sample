## Nestjs로 nodemailer사용해서 이메일보내는 샘플 앱 만들기

```
해당 샘플을 사용할때 주의할 점
- templates의경로설정
nestjs는 typescirpt를 사용하기때문에 컴파일하는 파일은 dist에 보관됩니다.
그렇기때문에 templates폴더를 찾을때 dist에서 찾는데 templates폴더를 dist로 수동적으로 옮기는것은
그렇게 좋은 선택이 아니기때문에 nest-cli파일을 해당 샘플과같이 수정하는것을 추천드립니다.
    - nest-cli.json 수정하기
- 보내는계정의 이메일이 2차비밀번호가 있으면 보안적인문제로 오류가납니다.id/pw로만 로그인할 수 있는 계정으로 테스트하세요

```
