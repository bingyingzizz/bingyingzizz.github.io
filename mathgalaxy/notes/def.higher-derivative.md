# 高阶导数与 C^k　`def.higher-derivative`　·　说明
根 `../`

⭐ 记号上的坑：$f^{(n)}$ 用的是**括号上标**，因为 $f^{n}$ 已经被「$f$ 的 $n$ 次幂」占用了。

⭐ $C^{2}$ 是凸性判据的入场券（要谈 $f''$ 就得先有二阶导数），$C^{n}$ 是 Taylor 公式的入场券。

⚠ $C^{k}$ 是**严格递减**的一串（本图的真包含写 $\subset$）：$C^{\infty} \subset C^{k} \subset \cdots \subset C^{1} \subset C^{0}$。反例：$f(x) = x^{2} \sin(1/x)$（补 $f(0) = 0$）在 $0$ 处可导但导数不连续，所以 $f \in C^{0} \setminus C^{1}$。
