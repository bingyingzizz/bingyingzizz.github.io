# 内射对象的判据　`prop.injective-criterion`　·　说明
根 `../`

- (1) $\iff$ (3)：**几乎只是定义改写**。$\operatorname{Hom}(-,I)$ 正合 $\iff$ 它把单态射送到满射（其余两个正合性对 $\operatorname{Hom}$ 是自动的，因为它是左正合的）。这一跳**不需要范畴有足够多内射**。
- (1) $\implies$ (2)：**一行**：给单态射 $\iota : I \rightarrowtail M$，由内射性存在 $r : M \to I$ 使 $r\iota = \mathrm{id}_{I}$ —— 这就是收缩。
- (2) $\implies$ (1)：**这一步要用 Baer 判别法的“提升”论证**：给单态射 $M' \rightarrowtail M$ 与 $f : M' \to I$，考虑推出图，把 $f$ 拉成 $I \rightarrowtail P$ 再取收缩，得到 $M \to I$ 使图交换。**这是四条里唯一有实质劳动的一跳**。
- (1) $\iff$ (4)：**只对“以 $I$ 为左端的短正合列”说**。一般短正合列分裂 $\iff$ 左端内射（或右端投射）；所以 (4) 的准确读法是「每个**形如** $0 \to I \to M \to M'' \to 0$ 的列分裂」。

> 续见 notes/prop.injective-criterion.3.md
