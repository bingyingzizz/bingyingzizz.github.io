# Baire 的三条等价刻画　`prop.baire-characterizations`　·　续页（第 2 页）
[在星图里打开](../#n=prop.baire-characterizations)　·　第 1 页 [nodes/prop.baire-characterizations.md](./prop.baire-characterizations.md)

## 陈述（续）
- (1) $\implies$ (2)：**反证 + 取补**。若某非空开集 $U$ 是第一纲（$U \subseteq \bigcup_{n} F_{n}$，$F_{n}$ 无处稠密闭），则 $U^{c} \cup \bigcup_{n} F_{n} = X$ —— 于是 $U = \bigcap_{n}(X \setminus F_{n})$ 中那族稠密开集的交**不含** $U$ 里任何点，与「交稠密」矛盾。**这一步只用到「稠密开集之交错密」的
定义**。
- (2) $\implies$ (3)：**同上反向**，仍只做补集：若可数个无处稠密闭集之并含有非空开集 $U$，则 $U$ 就是第一纲，与 (2) 矛盾。
- (3) $\implies$ (1)：**这一步要用可数交的构造**。设 $O_{n}$ 稠密开，令 $F_{n} := X \setminus O_{n}$（无处稠密闭）。要证 $\bigcap O_{n}$ 稠密，即证它的补 $\bigc

> 续见 [nodes/prop.baire-characterizations.3.md](./prop.baire-characterizations.3.md)
