# Giraud 定理的证明
`imp.giraud` · 推出 · strong 边 · 根 `../`

`def.topos` 拓扑斯 + `def.canonical-topology` 标准拓扑 + `def.generator` 生成元集 + `lem.representable-quotient` 可表示性的下降 → `thm.giraud` Giraud 定理

于是前提全部满足，**下降引理**给出 $F$ 可表示 —— 具体地 $F \cong X/R$，其中 $X = \coprod_{i} X_{i}$、$R = \coprod_{i,j} X_{i} \times_{F} X_{j}$。∎

> 四条里最不平凡的一步是 $(1) \implies (2)$：把一个抽象拓扑斯里的任意层，用小生成元集造一个覆盖，再用下降引理把「可表示」从覆盖的每一块传回整体。
