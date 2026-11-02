# 内射的单射可裂　`prop.injective-splitting`　·　说明
根 `../`

**1 蕴含 2**：取 $A = I$、$f = \mathrm{id}_{I}$，内射性给出的延拓 $M \to I$ 就是收缩 ✓。

**2 蕴含 1**：给定 $A \rightarrowtail B$ 与 $f : A \to I$。取**推出**

$$P := (I \oplus B) / \{\, (f(a),\ -a) : a \in A \,\},$$

它让 $A \to I$ 与 $A \to B$ 在 $P$ 中合流。$I \to P$ 仍是单射（推出沿单射仍单：判别 $(x, 0)$ 是否落在像里只看 $I$ 的分量）。由 2，$I \rightarrowtail P$ 有收缩 $r$，则 $r \circ (B \to P)$ 就是 $f$ 的延拓 ✓。

**2 与 3 等价**：由 `def.split-exact` 的判据，短正合列分裂当且仅当单射端有收缩 ✓。∎

📌 与 `prop.injective-criterion`（阿贝尔范畴里内射对象的四条等价）是同一条：那里第 2、4 条就是本条的两种说法；本条的证明可以逐字搬到任何阿贝尔范畴，因为只用了推出与核。
