# Riemann–Lebesgue 引理　`thm.riemann-lebesgue`　·　说明
根 `../`

**证明（阶梯函数逼近）。** 分三步，核心是「可积函数可以用阶梯函数一致逼近到任意精度」。

① **阶梯函数**：设 $\psi = \sum_{k} c_{k}\,\mathbf{1}_{[x_{k-1}, x_{k}]}$ 是阶梯函数。直接算

$$\int_{a}^{b} \psi(x)\,e^{i\lambda x}dx = \sum_{k} c_{k}\int_{x_{k-1}}^{x_{k}} e^{i\lambda x}dx = \sum_{k} c_{k}\,\frac{e^{i\lambda x_{k}} - e^{i\lambda x_{k-1}}}{i\lambda} ,$$

右端绝对值不超过 $\frac{2\sum_{k}|c_{k}|}{|\lambda|} \to 0$。所以结论对阶梯函数成立。

② **逼近**：对 $\varepsilon > 0$，取阶梯函数 $\psi$ 使 $\int_{a}^{b}|f - \psi| < \varepsilon/2$（Riemann 可积的定义直接给这一步：可积函数被阶梯函数在 $L^{1}$ 意义下逼近）。

③ **合并**：

$$\Bigl|\int_{a}^{b} f e^{i\lambda x}\Bigr| \le \int_{a}^{b} |f - \psi| + \Bigl|\int_{a}^{b}\psi\, e^{i\lambda x}\Bigr| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} ,$$

最后一个不等号对足够大的 $|\lambda|$ 成立（由①）。$\square$

> 续见 notes/thm.riemann-lebesgue.2.md
