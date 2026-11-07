# 自由阿贝尔群层　`def.free-abelian-sheaf`　·　说明
根 `../`

Čech 复形就是 $\check{C}^{\bullet}(X, M) = \operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot X_{\bullet}, M)$；

层上同调则是 $H^{n}(X, M) = \operatorname{Ext}^{n}_{\mathbb{Z}}(\mathbb{Z}\cdot X, M)$ ✓。

⚠️ **一般不是逐点算的**：层化会改动取值，「逐点自由再层化」与「自由」只有在层条件不碍事的时候才重合。

📌 例：$\mathbb{Z}\cdot \mathbf{1} \cong \mathbb{Z}$（常层）。⚠️ 但它**不是**投射对象：层范畴里 $\operatorname{Hom}(\mathbb{Z}\cdot X, -) \cong M(X)$ 只左正合，「自由 $\implies$ 投射」只在**预层**范畴成立（`prop.presheaf-free-projective`）。
