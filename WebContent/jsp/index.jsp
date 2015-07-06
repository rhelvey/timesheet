<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>

<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="../css/timesheet.css">
	
	<title>Time Sheet</title>
</head>

<body background="../images/Art-White-Hours-Wallpaper-HD-197.jpg">
	<div>
		<%@include file="../WEB-INF/jspf/navbarfragment.jspf"%>
		<%@include file="../WEB-INF/jspf/loginmodal.jspf"%>
		<%@include file="../WEB-INF/jspf/edittimemodal.jspf"%>
		<%@include file="../WEB-INF/jspf/timereport.jspf"%>
		
	</div>
	
	<h1 class="titlebacktext" >This is a time sheet</h1><div class="titleback">
	</div>
	

	<%@include file="../WEB-INF/jspf/footerfragment.jspf"%>
	<script src="../js/jquery-1.11.3.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script src="../js/moment.js"></script>
	<script src="../js/timesheet.js"></script>
</body>
</html>