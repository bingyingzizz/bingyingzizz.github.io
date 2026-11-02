# Mayer–Vietoris 序列　`thm.mayer-vietoris`　·　说明
根 `../`

**为什么它是标准工具**：任何流形都能被可缩的开集（卡里的球）覆盖，Mayer–Vietoris 加归纳就把整张流形算出来 —— 这是「好的覆盖」那条计算路线的起点。算的时候用 Čech 侧（`def.cech-cohomology`）更容易，两者的一致性由 de Rham 定理保证。

**为什么要求 $U, V$ 都开**：形式的限制只需要开集，不需要闭集；闭集版本要额外假设（或改用奇异上同调）。开性是「限制到重叠处」的合法保障。

**它的本质是同调代数**：短正合列

$$0 \to \Omega^{\bullet}(M) \to \Omega^{\bullet}(U) \oplus \Omega^{\bullet}(V) \to \Omega^{\bullet}(U \cap V) \to 0$$

取上同调就长出长正合列。所以 Mayer–Vietoris 不是形式的特殊性质，而是**链复形的一般定理**（蛇引理 / 连接同态）。
