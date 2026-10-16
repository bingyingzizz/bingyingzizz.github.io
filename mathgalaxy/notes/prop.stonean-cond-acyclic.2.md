# Stonean 上凝聚阿贝尔群零调　`prop.stonean-cond-acyclic`　·　说明
根 `../`

**证明。** 截面函子是 $\Gamma(S, -) = \operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}[S], -)$。
- **$\mathbb{Z}[S]$ 在 $S$ Stonean 时是投射对象**：极不连通性给出 $S$ 的闭开集格上的投影性（$S = \beta I$ 时 $\mathbb{Z}[S] = \mathbb{Z}[\beta I]$ 是自由的，而自由对象投射）；
- 于是 $\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}[S], -)$ 把满射送到满射 —— 即**正合**；
- 右导出函子 $R^{n}\Gamma(S,-)$ 量的正是「这个函子在第 $n$ 步有多大程度不正合」，函子本身正合故全为 $0$（$n>0$）。∎
