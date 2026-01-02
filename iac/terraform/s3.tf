

resource "aws_s3_bucket" "my-s3-bucket" {
  bucket = "cedric-lack-terraform-bucket"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}