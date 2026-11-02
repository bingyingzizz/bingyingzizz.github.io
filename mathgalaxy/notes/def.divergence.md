# 散度　`def.divergence`　·　说明
根 `../`

**为什么「唯一」**：$n$-形式在每点是一维的，所以 $\mathcal{L}_{X}\mathrm{d}V$ 必然是 $\mathrm{d}V$ 的某个函数倍，那个函数就被定义为散度。存在性不用证，唯一性也不用 —— 这是「用体积形式定义散度」最省事的地方。

**只看度量，不看定向**（容易误以为要看）：$\mathrm{d}V$ 变号时等式两边同时变号，$\operatorname{div}X$ 不变。所以散度是**度量**的函数，定向只是写 $\mathrm{d}V$ 时的脚手架。散度定理里出现的符号来自边界，不来自散度本身。

**坐标公式怎么来的**：$\iota_{X}\mathrm{d}V = \sum_{i}(-1)^{i-1}\sqrt{\det g}\,X^{i}\,\mathrm{d}x^{1}\wedge\cdots\widehat{\mathrm{d}x^{i}}\cdots\wedge\mathrm{d}x^{n}$，取 $\mathrm{d}$ 之后每一项贡献 $\partial_{i}(\sqrt{\det g}\,X^{i})$，再提出 $\mathrm{d}V$ 的系数 $\sqrt{\det g}$。

**迹刻画**：$\operatorname{div}X = \operatorname{tr}(v\mapsto\nabla_{v}X)$（Levi-Civita 联络）。两个定义等价，靠的是「体积形式平行」：$\nabla\mathrm{d}V = 0$，于是体积的变化率就是流的迹。

> 续见 notes/def.divergence.2.md
