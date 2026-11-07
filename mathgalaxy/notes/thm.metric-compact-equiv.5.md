# 紧的三个等价刻画　`thm.metric-compact-equiv`　·　说明
根 `../`

**④ (b) $\implies$ (a)：列紧 $\implies$ 紧。** 由 ② 已知 $X$ 全有界。反设开覆盖 $\mathcal{U}$ 没有有限子覆盖。称 $E \subseteq X$ **坏**，若它不能被 $\mathcal{U}$ 中有限多个成员盖住；则 $X$ 坏。**坏性可下传到一个小球**：设 $E$ 坏，而 $X$ 被有限多个半径 $r$ 的球 $B_{1}, \ldots, B_{m}$ 盖住；若每个 $E \cap B_{j}$ 都能被有限多个成员盖住，则 $E = \bigcup_{j} (E \cap B_{j})$ 也能，矛盾，故某个 $E \cap B_{j}$ 坏。从 $E_{0} := X$ 出发，用半径 $2^{-k}$ 的有限覆盖逐层取坏球 $E_{k} := E_{k-1} \cap B_{k}$；则 $E_{k}$ 的直径 $\le 2^{1-k}$，且每层只需在有限多个球里挑一个（规定取编号最小的坏球），不用选择公理。取 $x_{k} \in E_{k}$（坏集非空）。对 $k \le l$ 有 $x_{k}, x_{l} \in E_{k}$，故 $d(x_{k}, x_{l}) \le 2^{1-k} \to 0$：$\{x_{k}\}$ 是 Cauchy 列，由完备性 $x_{k} \to x$。因 $\mathcal{U}$ 覆盖，$x \in U$ 对某个 $U \in \mathcal{U}$ 成立；取 $r > 0$ 使 $B(x, r) \subseteq U$。对足够大的 $k$，直径 $E

> 续见 notes/thm.metric-compact-equiv.6.md
