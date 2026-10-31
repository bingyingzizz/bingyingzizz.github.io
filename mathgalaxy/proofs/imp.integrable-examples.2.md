# 振幅判据 + 一致连续 $\implies$ 可积性三例
`imp.integrable-examples` · 推出 · strong 边 · 根 `../`

`thm.riemann-criterion` 可积的振幅判据 + `thm.uniform-continuity-compact` 紧集上连续 ⟹ 一致连续 + `thm.evt` 最值定理 → `prop.integrable-examples` 哪些函数可积

**② 单调 $\implies$ 可积。** 设 $f$ 递增。取等距分割 $x_i = a + i\,(b - a)/n$，则第 $i$ 段上 $M_i = f(x_i)$、$m_i = f(x_{i-1})$，振幅和

$$U - L = \sum_{i=1}^{n} \bigl( f(x_i) - f(x_{i-1}) \bigr)\frac{b - a}{n} = \bigl( f(b) - f(a) \bigr)\frac{b - a}{n} \xrightarrow{\;n \to \infty\;} 0$$

（这是**裂项**：中间的 $f(x_i)$ 全部抵消。）

**③ 有限个不连续点 $\implies$ 可积。** 把 $[a, b]$ 分成有限段，每段内部连续、端点处或为不连续点；对每一段用 ①，再把分割在端点处接起来即可。

> 续见 proofs/imp.integrable-examples.3.md
