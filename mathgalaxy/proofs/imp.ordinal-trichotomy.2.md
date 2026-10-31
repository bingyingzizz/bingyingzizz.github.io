# 序数的定义 $\implies$ 三歧性
`imp.ordinal-trichotomy` · 推出 · strong 边 · 根 `../`

`def.ordinal` 序数 + `ax.found` 正则公理 → `thm.ordinal-trichotomy` 序数可比

**② 若 $\beta \subset \alpha$ 则 $\beta \in \alpha$。** 取 $b$ 为 $\alpha \setminus \beta$ 的 $\in$-最小元。断言 $\beta = b$。
　$\subseteq$：设 $x \in \beta$。由 $\beta \subseteq \alpha$ 有 $x \in \alpha$，故 $x, b \in \alpha$；由 $\in$ 在 $\alpha$ 上的**三歧性**（良序蕴含全序），$x \in b$、$x = b$、$b \in x$ 恰有一个成立。后两种都会给出 $b \in \beta$（$x = b$ 直接，$b \in x$ 用 $\beta$ 传递），与 $b$ 的取法矛盾。故 $x \in b$。
　$\supseteq$：设 $x \in b$。由 $\alpha$ 传递得 $x \in \alpha$。若 $x \in \alpha \setminus \beta$，则 $x \in b$ 与 $b$ 的最小性矛盾（$x \in b$ 即 $x$ 比 $b$ 小）。故 $x \in \beta$。
　于是 $\beta = b$，而 $b \in \alpha$，即 $\beta \in \alpha$。

> 续见 proofs/imp.ordinal-trichotomy.3.md
