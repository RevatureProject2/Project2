package utils;
import java.io.File;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

/** Util.HibernateUtil Class
 * @author Joshua Pressley
 * @version 1.0 */
public class HibernateUtil {
    /** Logging object to record log4j messages.*/
    private static Logger log = Logger.getLogger(HibernateUtil.class);
    /** Session factory*/
    private static SessionFactory mysession;
    /** private constructor */
    private HibernateUtil() { }
    /** Gets session object*/
    public static SessionFactory getSession(){
        if (mysession == null) {
            log.info("Creating a Session");
            String hibernatePropsFilePath = "C:\\Users\\qiunn\\Documents\\Reveture\\Projects\\project2\\api\\src\\main\\resources\\hibernate.cfg.xml";
            File hibernatePropsFile = new File(hibernatePropsFilePath);
            Configuration configuration = new Configuration();
            mysession = configuration.configure(hibernatePropsFile).buildSessionFactory();
        }//end if
        return mysession;
    }//end getSession()
    /** Closes session at the end of use*/
    public static void closeSession() { mysession.close(); }
}//end class Util.HibernateUtil