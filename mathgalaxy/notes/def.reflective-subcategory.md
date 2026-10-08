# 反射子范畴　`def.reflective-subcategory`　·　说明
根 `../`

一句话：**反射子范畴是「所有对象都能最佳逼近到它里面」的满子范畴**。$F$ 把 $X$ 送去它里面最接近 $X$ 的那个对象。

例：



- $\mathbf{Ab}$ 是 $\mathbf{Grp}$ 的反射子范畴：$F : \mathbf{Grp} \to \mathbf{Ab}$，$G \mapsto G/[G,G]$，且 $\operatorname{Hom}_{\mathbf{Ab}}(G/[G,G], G') \cong \operatorname{Hom}_{\mathbf{Grp}}(G, G')$。

- $\mathbf{Grp}$ 同时是 $\mathbf{Mon}$ 的反射子范畴与余反射子范畴：右伴随把幺半群送到它的**可逆元群** $M^{\times}$。

- $\mathbf{CHaus}$ 是 $\mathbf{Top}$ 的反射子范畴。

- 离散空间范畴在 $\mathbf{Top}$ 中是反射的，平凡拓扑空间范畴在 $\mathbf{Top}$ 中是余反射的。
