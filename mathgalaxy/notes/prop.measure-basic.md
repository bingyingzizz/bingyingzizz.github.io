# 测度的基本性质　`prop.measure-basic`　·　说明
根 `../`

(a)：把 $F$ 拆成 $F = E \cup (F \setminus E)$ 用可数可加（把余下的位置补 $\emptyset$）。

(b)：把 $\bigcup E_{j}$ 改成不交并：$F_{j} = E_{j} \setminus (E_{1} \cup \cdots \cup E_\{j-1\})$，则 $\mu (\bigcup E_{j}) = \sum \mu (F_{j}) \le \sum \mu (E_{j})$。

(c)：令 $A_{j} = E_{j} \setminus E_\{j-1\}$（$E_{0} = \emptyset$），则 $\bigcup E_{j}$ 是 $A_{j}$ 的不交并，而 $\mu (E_{n}) = \sum _\{j\le n\} \mu (A_{j})$ —— 两边取极限即可。

(d)：**「$\mu (E_{1}) < \infty$」不能省。** 反例：$X = \mathbb{N}$，$\mu =$ 计数测度，$E_{j} = \{j, j+1$ …}，则每个 $\mu (E_{j}) = \infty$ 但交集为 $\emptyset$、$\mu (\emptyset ) = 0$。

(c) 与 (d) 合起来说明：测度在集合的**单调极限**下连续 —— 这正与「单调类」这个词呼应。
