# 序数的定义 $\implies$ 三歧性
`imp.ordinal-trichotomy` · 推出 · strong 边 · 根 `../`

`def.ordinal` 序数 + `ax.found` 正则公理 → `thm.ordinal-trichotomy` 序数可比

后两种都会给出 $b \in \beta$（$x = b$ 直接，$b \in x$ 用 $\beta$ 传递），与 $b$ 的取法矛盾。

故 $x \in b$。
　$\supseteq$：设 $x \in b$。由 $\alpha$ 传递得 $x \in \alpha$。若 $x \in \alpha \setminus \beta$，则 $x \in b$ 与 $b$ 的最小性矛盾（$x \in b$ 即 $x$ 比 $b$ 小）。故 $x \in \beta$。
　于是 $\beta = b$，而 $b \in \alpha$，即 $\beta \in \alpha$。

**③ 三歧性。** 若 $\alpha \ne \beta$，则 $\alpha \subseteq \beta$ 与 $\beta \subseteq \alpha$ 不能同时成立。

不妨设 $\beta \nsubseteq \alpha$，则 $\beta \setminus \alpha \ne \emptyset$，故 $\beta \subset \alpha$ 不成立，由 ② 得 $\alpha \in \beta$。

对调 $\alpha, \beta$ 同理。

> 续见 proofs/imp.ordinal-trichotomy.3.md
