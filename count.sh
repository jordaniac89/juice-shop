#! /bin/bash
COUNT=$(snyk code test | grep -o '\[High\]' | wc -l)
echo $COUNT

if [ $COUNT -gt 5 ]
then
  echo 1
else
  echo 0
fi