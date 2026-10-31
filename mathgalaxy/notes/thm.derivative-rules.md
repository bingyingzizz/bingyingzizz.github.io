# 求导法则　`thm.derivative-rules`　·　说明
根 `../`

⭐ 乘积法则的证明要点是**加一项减一项**：$f(x)g(x) - f(x_0)g(x_0) = [f(x) - f(x_0)]\,g(x) + f(x_0)[g(x) - g(x_0)]$。第一项里的 $g(x)$ 要用「可导 $\implies$ 连续」换成 $g(x_0)$ —— 这就是为什么 `prop.differentiable-implies-continuous` 必须排在它前面。

⚠ 链式法则**不能**直接写 $\dfrac{\Delta g}{\Delta f}\cdot\dfrac{\Delta f}{\Delta x}$：$\Delta f$ 可能为 $0$（$f$ 在 $x_0$ 附近取值相同），分母会消失。正确写法是把 $g$ 的增量写成「线性主部 + 余项」：$g(y) - g(y_0) = [g'(y_0) + \varepsilon(y)]\,(y - y_0)$，其中 $\varepsilon(y) \to 0$。

⭐ 商法则由乘积法则与 $\left(\dfrac{1}{g}\right)' = -\dfrac{g'}{g^{2}}$ 合成；后者是把 $\dfrac{1}{g(x)} - \dfrac{1}{g(x_0)} = -\dfrac{g(x) - g(x_0)}{g(x)g(x_0)}$ 除以 $x - x_0$ 再取极限。
