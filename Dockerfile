FROM novemberde/node-awscli:docker

ADD . /src

WORKDIR /src

CMD ["sh"]