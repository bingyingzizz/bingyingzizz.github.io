# 有余极限时 Kan 延拓总存在　`prop.kan-extension-exists`　·　说明
根 `../`

**证明。**
**（一）造 $p_{!}F$ 在对象上的值。** 对每个 $X' \in \mathcal{C}'$，逗号范畴 $p \downarrow X'$ 的对象是 $(X, f : p(X) \to X')$，态射是使 $f' \circ p(u) = f$ 的 $u : X \to X'$。这一族 $\{F(X)\}$ 连同「$u$ 给出 $F(u) : F(X) \to F(X')$」构成一个余锥，取其余极限就得到 $(p_{!}F)(X')$ ✓。
**（二）在态射上的值。** 给定 $u' : X' \to Y'$，把 $X'$ 处的余锥沿 $u'$ 推前（$(X, f) \mapsto (X, u' \circ f)$）得 $Y'$ 处的余锥，泛性质给出 $(p_{!}F)(u')$ ✓，函子性由泛性质中的唯一性得到 ✓。
**（三）那条自然变换 $\alpha : F \implies p_{!}F \circ p$。** 在 $X$ 处取 $p(X) \xrightarrow{\ 1\ } p(X)$ 对应的那条腿 $F(X) \to (p_{!}F)\bigl(p(X)\bigr)$ ✓。
**（四）泛性质。** 设 $G : \mathcal{C}' \to \mathcal{D}$ 与 $\gamma : F \implies G \circ p$。在 $X'$ 处，$\{\gamma_{X} \text{ 后接 } G(f) : F(X) \to G(X')\}_{f : p(X) \to X'}$ 是 $G(X')$ 里的一个余锥，于是得唯一的 $\widetilde{\gamma}_{X'} : (p_{!}F)(X') \to G(X')$ ✓；唯一

> 续见 notes/prop.kan-extension-exists.2.md
