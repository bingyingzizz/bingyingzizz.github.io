# 可表示性的下降　`lem.representable-quotient`　·　说明
根 `../`

**证明。** 记 $F_{i} \cong h_{X_{i}}$、$F_{i}\times_{F}F_{j} \cong h_{X_{i,j}}$，并记 $X := \coprod_{i}X_{i}$、$R := \coprod_{i,j}X_{i,j}$。
- **$R$ 是 $X$ 上的等价关系**：满态射 $\coprod_{i}F_{i} \to F$ 给出平行对 $R \rightrightarrows X$ 的两条结构映射（由 $F_{i}\times_{F}F_{j} \rightrightarrows F_{i}$ 与 Yoneda 得到）；自反来自对角 $F_{i} \to F_{i}\times_{F}F_{i}$，对称来自 $X_{i,j} \cong X_{j,i}$，传递来自 $F_{i}\times_{F}F_{j}\times_{F}F_{k}$ 的三重拉回（这些都在层范畴里是极限，逐层算）✓。
- **等价关系有效**：拓扑斯里等价关系都有效，故商 $X/R$ 存在，且 $h_{X/R}$ 是这个关系在层范畴里的余等化子 ✓。
- **$F \cong X/R$**：层范畴中的余等化子列
$$\coprod_{i,j}F_{i}\times_{F}F_{j} \rightrightarrows \coprod_{i}F_{i} \longrightarrow F$$
说明 $F$ 是这两个对象的余等化子（满态射是有效满的），而同一列换成可表示层就是 $R \rightrightarrows X \to X/R$，故 $F \cong X/R = h_{X/R}$，即 $F$ 可表示 ✓。∎

> 续见 notes/lem.representable-quotient.2.md
