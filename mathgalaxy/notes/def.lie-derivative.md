# Lie 导数　`def.lie-derivative`　·　说明
根 `../`

**三类的统一**：函数与形式的拉回是 $\omega \mapsto \varphi_{t}^{\ast}\omega$，向量场没有拉回（要用推前 $\mathrm{d}\varphi_{t}$），所以定义里得按类型选方向。但**结果**是统一的：$\mathcal{L}_{X}$ 是张量代数上的导子，作用在函数上是 $X$，作用在向量场上就是括号 —— 两条都是从同一个「拖回来求导」算出来的。

**为什么 $\mathcal{L}_{X}$ 对 $X$ 不是 $C^{\infty}$-线性的**：$\mathcal{L}_{fX}T \ne f\,\mathcal{L}_{X}T$（例如 $\mathcal{L}_{fX}Y = f[X,Y] - (Yf)X$）。所以 $X \mapsto \mathcal{L}_{X}$ 不是张量，而是 Lie 代数同态 $\mathfrak{X}(M) \to \operatorname{Der}(\Omega^{\bullet}M)$ —— 这与 `def.lie-bracket` 的 notes 里「括号不是张量」是同一条性质。

> 续见 notes/def.lie-derivative.2.md
