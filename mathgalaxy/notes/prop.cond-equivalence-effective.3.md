# Cond 的等价关系有效　`prop.cond-equivalence-effective`　·　说明
根 `../`

**证明。** 给定 $R \rightrightarrows X$。因为 $\mathrm{Cond}$ 有余极限，商 $Y := \operatorname{coeq}(R \rightrightarrows X)$ 存在，且商映射 $q : X \to Y$ 满（余等化子总是满）。由**上一条**，$q$ 是有效满：$q$ 是 $X \times_{Y} X \rightrightarrows X$ 的余等化子。
现在比较 $R$ 与 $X\times_{Y} X$：
- 两个投影 $R \rightrightarrows X$ 复合到 $Y$ 相同（余等化子的定义），故 $R \subseteq X \times_{Y} X$；
- 反过来，$X \times_{Y} X$ 是「被 $q$ 认同的点对」，而层论上「$q$ 在两个点上取同值」这件事可以在**覆盖上逐点验**：取覆盖 $(X_{i} \to X)$，$X\times_{Y}X$ 在每块上就是 $R$ 在每块上的值（用 $X$ 与 $R$ 的层条件 + 余等化子的泛性质），于是 $X \times_{Y} X \subseteq R$。
两边互包，$R \cong X \times_{Y} X$ —— 这正是有效性，也正是 Giraud 判据里那一条。∎
