package io.ionic.starter;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Blocker")
public class BlockerPlugin extends Plugin {

  @PluginMethod()
  public void echo(PluginCall call) {
    // pega o valor que o angular vai enviar
    String value = call.getString("value");

    // imprime no console interno do android
    Log.d("Blocker App", "Mensagem recebida do Angular: " + value);

    // devolve uma resposta ao angular
    JSObject ret = new JSObject();
    ret.put("value", value);
    call.resolve(ret);
  }
}
