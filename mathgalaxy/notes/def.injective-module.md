# 内射模　`def.injective-module`　·　说明
根 `../`

**读法**：内射就是「延拓总能做到」。注意延拓**不唯一**，所以这不是泛性质（不像张量积），只是一个存在性条件 —— 这使内射性难以逐点刻画，得靠判据（`thm.baer-criterion`）。

**与投射对偶**：把所有箭头反过来就是 `def.projective-object` 里的投射对象。在 $R\text{-}\mathbf{Mod}$ 里，投射 = 自由模的直和项，内射 = 不能作真子模嵌进更大的模里（见 `prop.injective-splitting`）。

**例子**：域上一切模都内射（向量空间都是自由模，自由即投射，而域上的投射与内射恰好重合）；$\mathbb{Z}$ **不**内射：含入 $\mathbb{Z} \rightarrowtail \mathbb{Q}$ 没有收缩，因为 $\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Q}, \mathbb{Z}) = 0$。

📌 判据的归约路线：只需对「$A$ 是 $B$ 的理想」检验（`thm.baer-criterion`）；对 $\mathbb{Z}$-模再化成「可除」（`thm.pid-injective-divisible`）。
