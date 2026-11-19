# imp.riemann-lebesgue-oscillatory
`imp.riemann-lebesgue-oscillatory` · 推出 · strong 边 · 根 `../`

`def.riemann-integrable` Riemann 可积 + `def.riemann-sum` Riemann 和 → `thm.riemann-lebesgue` Riemann–Lebesgue 引理

**证明（阶梯函数逼近）。** 分三步，核心是「可积函数可以用阶梯函数在 $L^{1}$ 意义下逼近到任意精度」。

① **阶梯函数**：设 $\psi = \sum_{k} c_{k}\,\mathbf{1}_{[x_{k-1}, x_{k}]}$ 是阶梯函数。直接算

$$\int_{a}^{b} \psi(x)\,e^{i\lambda x}dx = \sum_{k} c_{k}\int_{x_{k-1}}^{x_{k}} e^{i\lambda x}dx = \sum_{k} c_{k}\,\frac{e^{i\lambda x_{k}} - e^{i\lambda x_{k-1}}}{i\lambda} ,$$

右端绝对值不超过 $\frac{2\sum_{k}|c_{k}|}{|\lambda|} \to 0$。所以结论对阶梯函数成立。

② **逼近**：对 $\varepsilon > 0$，取阶梯函数 $\psi$ 使 $\int_{a}^{b}|f - \psi| < \varepsilon/2$（Riemann 可积的定义直接给这一步：可积函数被阶梯函数在 $L^{1}$ 意义下逼近）。

③ **合并**：

> 续见 proofs/imp.riemann-lebesgue-oscillatory.2.md
