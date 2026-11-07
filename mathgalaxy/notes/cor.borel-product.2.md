# 可数积的 Borel 代数　`cor.borel-product`　·　说明
根 `../`

于是生成它们的 $\sigma$代数 $\bigotimes_{j}\mathfrak{B}_{X_{j}} \subseteq \mathfrak{B}_{X}$ ✓。
- **$\supseteq$（需要可分）**：每个 $X_{j}$ **可分**，取可数稠密集 $C_{j}$，则 $\{ B(c, r) : c \in C_{j},\ r \in \mathbb{Q}_{>0} \}$ 是 $X_{j}$ 的**可数基** ✓。
  $X$ 的基本开集形如 $\bigcap_{j \in F}\pi_{j}^{-1}(U_{j})$（$F$ 有限、$U_{j}$ 取基元素）；每个 $\pi_{j}^{-1}(U_{j}) \in \bigotimes_{j}\mathfrak{B}_{X_{j}}$，有限交仍在其中，而**开集是基本开集之并**、基又可数 $\implies$ 一切开集属于 $\bigotimes_{j}\mathfrak{B}_{X_{j}}$ $\implies$ $\mathfrak{B}_{X} \subseteq \bigotimes_{j}\mathfrak{B}_{X_{j}}$ ✓。
两边互包即得等号。∎
⚠️ **积的可数性不能省**：$\mathbb{R}^{\mathbb{R}}$ 是**不可数积**，其积 $\sigma$ 代数**真包含于** Borel $\sigma$ 代数（每个因子 $\mathbb{R}$ 都可分，坏在积不可数）；充分条件是「每个因子可分 **且** 积可数」。
