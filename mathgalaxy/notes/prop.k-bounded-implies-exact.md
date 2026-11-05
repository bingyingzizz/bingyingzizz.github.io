# 相邻两条 K-有界 推出 正合　`prop.k-bounded-implies-exact`　·　说明
根 `../`

**这是「定量 $\implies$ 定性」的核心一步 —— 但必须先补一条闭性假设。** 给定闭链 $s \in M^{n}$（即 $d^{n}s = 0$），要证 $s \in \operatorname{im} d^{n+1}$。

**证明（只要两步）。** 由 $M^{n}$ 处的 $K$-有界正合，对每个 $\varepsilon > 0$ 都存在 $s' \in M^{n+1}$ 使 $\|s - d^{n+1}s'\| \le K\|d^{n}s\| + \varepsilon = \varepsilon$（末步用了 $d^{n}s = 0$）。$\varepsilon$ 任意，故 $s$ 落在 $\operatorname{im} d^{n+1}$ 的**闭包**里。

由**假设 $\operatorname{im} d^{n+1}$ 闭**，闭包就是它自己，于是 $s \in \operatorname{im} d^{n+1}$；反向包含 $\operatorname{im} d^{n+1} \subseteq \ker d^{n}$ 由 $d \circ d = 0$ 给出。故 $\ker d^{n} = \operatorname{im} d^{n+1}$，即正合。∎

⚠️ **闭值域这条不能省**：$\ell^{2}$ 上取 $d(x_{j}) := (x_{j}/j)$，$\operatorname{im} d$ 稠密而不闭，此时 $K$-有界正合可以成立却没有正合 —— **稠密正合 $\ne$ 正合**。

> 续见 notes/prop.k-bounded-implies-exact.2.md
