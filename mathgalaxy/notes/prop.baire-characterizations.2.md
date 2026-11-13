# Baire 的三条等价刻画　`prop.baire-characterizations`　·　说明
根 `../`

- (1) $\implies$ (2)：**反证**。设某非空开集 $U$ 是第一纲：$U \subseteq \bigcup_{n} F_{n}$，各 $F_{n}$ 无处稠密（不妨取闭）。令 $G_{n} := X \setminus F_{n}$，则每个 $G_{n}$ 是稠密开集。由 (1)，$G := \bigcap_{n} G_{n}$ 稠密，故 $G \cap U \ne \emptyset$；但 $x \in G \cap U$ 会给出 $x \in U$ 且 $x \notin \bigcup_n F_n$，与 $U \subseteq \bigcup_{n} F_{n}$ 矛盾。**这一步只用到「稠密开集之交错密」**。
- (2) $\implies$ (3)：**同上反向**，仍只做补集：若可数个无处稠密闭集之并含有非空开集 $U$，则 $U$ 就是第一纲，与 (2) 矛盾。
- (3) $\implies$ (1)：**这一步要用可数交的构造**。设 $O_{n}$ 稠密开，令 $F_{n} := X \setminus O_{n}$（无处稠密闭）。要证 $\bigcap O_{n}$ 稠密，即证它的补 $\bigcup F_{n}$ 内部为空 —— 那正是 (3)。
- **注意 (1) 里的「可数」不能换成「有限」**：有限个稠密开集之交稠密在**任何**拓扑空间都成立（不用任何假设），所以 Baire 性完全是「可数」带来的。

> 续见 notes/prop.baire-characterizations.3.md
