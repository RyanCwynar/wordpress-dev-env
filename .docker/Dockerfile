# FOB NOTES:
# This is an initial configuration of "Dockerfile" for use with Docker for localhost development
# Using guidance from resource article: https://bitpress.io/simple-approach-using-docker-with-php/

# MAINTAINER Fueled on Bacon

FROM wordpress:latest

COPY .docker/keys/domain.crt /etc/apache2/ssl/apache.crt
COPY .docker/keys/domain.key /etc/apache2/ssl/apache.key
COPY .docker/000-default.conf /etc/apache2/sites-enabled
#RUN apt-get -y update && apt-get upgrade -y
# Install tools && libraries
RUN apt-get -y install \
   # --fix-missing apt-utils nano wget dialog \
   # build-essential git curl libcurl3 libcurl3-dev zip \
   # libmcrypt-dev libsqlite3-dev libsqlite3-0 mysql-client \
   # zlib1g-dev libicu-dev libfreetype6-dev libjpeg62-turbo-dev libpng-dev \
    libjpeg62-turbo-dev libpng-dev \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install gd mysqli opcache \
&& pecl install xdebug \
&& echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)\n" >> /usr/local/etc/php/conf.d/xdebug.ini \
&& echo "xdebug.remote_enable=1\n" >> /usr/local/etc/php/conf.d/xdebug.ini \
&& echo "xdebug.remote_autostart=1\n" >> /usr/local/etc/php/conf.d/xdebug.ini \
&& echo "xdebug.remote_connect_back=0\n" >> /usr/local/etc/php/conf.d/xdebug.ini \
&& echo "xdebug.remote_host=docker.for.mac.host.internal\n" >> /usr/local/etc/php/conf.d/xdebug.ini \
&& echo "xdebug.remote_port=9000\n" >> /usr/local/etc/php/conf.d/xdebug.ini \
&& echo "xdebug.idekey=REMOTE\n" >> /usr/local/etc/php/conf.d/xdebug.ini

#RUN pecl install xdebug && docker-php-ext-enable xdebug 
# Enable apache modules
RUN a2enmod rewrite headers ssl

EXPOSE 80 443