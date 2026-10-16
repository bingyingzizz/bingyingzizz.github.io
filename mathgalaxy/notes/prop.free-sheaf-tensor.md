# 自由对象的张量积　`prop.free-sheaf-tensor`　·　说明
根 `../`

**证明（米田）。** 对任意 $N \in \mathcal{T}(\mathbf{Ab})$，
$$\operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}\cdot X \otimes \mathbb{Z}\cdot Y,\ N\bigr) \cong \operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}\cdot X,\ \operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot Y, N)\bigr) \cong \operatorname{Hom}\bigl(X,\ \operatorname{Hom}(Y, N)\bigr) \cong \operatorname{Hom}(X \times Y,\ N) \cong \operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}\cdot(X \times Y),\ N\bigr) ✓$$
（第一、三步是张量–内 Hom 伴随，第二、四步是自由对象的万有性质，中间一步是 $X \times Y$ 的泛性质。）对一切 $N$ 成立，由米田引理即得同构 ✓。∎

⭐ 读法：**自由对象把拓扑斯里的积翻译成阿贝尔群层里的张量积**。
