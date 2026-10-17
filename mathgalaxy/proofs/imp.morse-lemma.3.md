# 积分形式的 Taylor 余项 + 对称矩阵的光滑配方 $\implies$ Morse 引理
`imp.morse-lemma` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 + `thm.mixed-partials` 混合偏导相等 → `thm.morse-lemma` Morse 引理

**第三步：光滑配方（把 $h(x)$ 对角化）。** 在 $a$ 附近 $h(x)$ 非退化（因 $h(a) = \frac{1}{2}H_f(a)$ 可逆，可逆是开条件）。用**光滑的 Gram–Schmidt / 配方法**对对称矩阵函数作合同变换：逐步消去非对角项，得到

$$f(x) - f(a) = \sum_{i=1}^{n} \varepsilon_i\, \sigma_i(x)\, \bigl( y_i(x) \bigr)^{2}, \qquad \varepsilon_i \in \{\pm 1\}$$

其中 $\sigma_i(x) > 0$ 光滑、$y_i(x)$ 是光滑函数且 $D y(a)$ 可逆（每一步的变换矩阵在 $a$ 附近可逆）。

> 续见 proofs/imp.morse-lemma.4.md
