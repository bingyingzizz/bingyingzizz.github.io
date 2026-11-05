# Lie 导数　`def.lie-derivative`　·　说明
根 `../`

**三类的统一**：函数与形式的拉回是 $\omega \mapsto \varphi_{t}^{\ast}\omega$；向量场**沿一般映射**不能拉回（非单射时无定义），只能推前 $\mathrm{d}\varphi_{t}$；但**沿微分同胚** $F$ 拉回是有的：$F^{\ast}Y = (\mathrm{d}F)^{-1} \circ Y \circ F$（取 $F(x) = 2x$、$Y = \partial_{x}$：$F^{\ast}Y = \tfrac{1}{2}\partial_{x}$）。流 $\varphi_{t}$ 正是微分同胚，所以定义里对向量场用的是 $(\varphi_{-t})_{\ast}$，方向与形式相反。

但**结果**是统一的：$\mathcal{L}_{X}$ 是张量代数上的导子，作用在函数上是 $X$，作用在向量场上就是括号 —— 两条都是从同一个「拖回来求导」算出来的。

**为什么 $\mathcal{L}_{X}$ 对 $X$ 不是 $C^{\infty}$-线性的**：$\mathcal{L}_{fX}T \ne f\,\mathcal{L}_{X}T$（例如 $\mathcal{L}_{fX}Y = f[X,Y] - (Yf)X$）。

所以 $X \mapsto \mathcal{L}_{X}$ 不是张量，而是 Lie 代数同态 $\mathfrak{X}(M) \to \operatorname{Der}(\Omega^{\bullet}M)$ —— 这与 `def.lie-bracket` 的 notes 里「括号不是张量」是同一条性质。

> 续见 notes/def.lie-derivative.2.md
