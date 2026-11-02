# Lie 导数　`def.lie-derivative`　·　说明
根 `../`

Lie 导数是流形的**内在**运算 —— 不需要度量、不需要连络，这是它比 $\nabla$ 更「免费」的地方。

**分量公式（$1$-形式）**：

$$\mathcal{L}_{X}\omega = \sum_{j}\Bigl(\sum_{i}X^{i}\partial_{i}\omega_{j} + \sum_{i}\omega_{i}\,\partial_{j}X^{i}\Bigr)\mathrm{d}x^{j}.$$

第二项是「$\mathrm{d}x^{j}$ 随流变形」的修正；少了它就得到「对 $X$ 是 $C^{\infty}$-线性」的假结论。

**流的定义域不完整时也成立**：$\varphi_{t}$ 只需在 $p$ 附近、$|t| < \varepsilon$ 有定义（`thm.flow-local` 就够），因为 Lie 导数只用 $t = 0$ 处的导数。
