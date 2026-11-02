# Leray 谱序列　`thm.leray-spectral-sequence`　·　说明
根 `../`

**证明。** 关键的一条是伴随给出的截面同构

$$\Gamma\bigl(X',\ f_{*}M\bigr) = \Gamma\bigl(f^{-1}(X'),\ M\bigr) ✓$$

把 $\Gamma\bigl(f^{-1}(X'), \cdot\bigr)$ 写成 $\Gamma(X', \cdot) \circ f_{*}$，再套 Grothendieck 谱序列（$f_{*}$ 把内射送到 $f_{*}$ 的零调对象 —— 内射本身零调）✓，即得 ✓。∎

⭐ 用处：**先在 $\mathcal{T}$ 这一侧算 $R^{q}f_{*}$，再在 $\mathcal{T}'$ 那一侧算 $H^{p}$**，两层的信息由这条谱序列拼起来。
