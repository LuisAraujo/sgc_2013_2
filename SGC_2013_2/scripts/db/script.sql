SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `condominio` DEFAULT CHARACTER SET utf8 ;
USE `condominio` ;

-- -----------------------------------------------------
-- Table `condominio`.`tbtipodespesa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `condominio`.`tbtipodespesa` (
  `idtbtipodespesa` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL DEFAULT NULL,
  `valor` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`idtbtipodespesa`))
ENGINE = InnoDB
AUTO_INCREMENT = 43
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `condominio`.`tbtiposervico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `condominio`.`tbtiposervico` (
  `idtbtiposervico` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idtbtiposervico`))
ENGINE = InnoDB
AUTO_INCREMENT = 24
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `condominio`.`tbusuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `condominio`.`tbusuario` (
  `idusuario` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `condominio`.`tbadministrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `condominio`.`tbadministrador` (
  `idtbadministrador` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `cpf` VARCHAR(11) NULL,
  `usuario` VARCHAR(100) NULL,
  `senha` VARCHAR(50) NULL,
  PRIMARY KEY (`idtbadministrador`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
