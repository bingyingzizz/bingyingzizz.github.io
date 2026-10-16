# 根子空间分解 + 幂零块 $\implies$ Jordan 标准形
`imp.jordan-canonical-form` · 推出 · strong 边 · 根 `../`

`thm.primary-decomposition` 根子空间分解 + `thm.factor-theorem` 因式定理与根 → `thm.jordan-canonical-form` Jordan 标准形

归纳地：从最后一层 $\ker N^{s}$ 里取一组基，映到商 $\ker N^{s}/\ker N^{s-1}$ 上；在商里按同样办法取基并拉回，逐层拼出一组基，使 $N$ 在其中表现为若干「上移位」块 $N_k$（对角线为 $0$、上对角为 $1$）。
3. **拼装**：把每个 $V_i$ 里得到的基拼成 $V$ 的基。在这组基下 $T$ 的矩阵：在第 $i$ 块上是 $\lambda_i I + N_i$，即若干 Jordan 块之并，各块的特征值为 $\lambda_i$。

$T$ 可对角化 $\iff$ 每个 $N_i = 0$ $\iff$ 每个 $V_i = E_{\lambda_i}$ $\iff$ 所有块是 $1 \times 1$。∎

> 第 2 步（幂零算子的分层取基）是整条定理唯一的**构造性**部分；其余两半都是「把已知分解拼起来」。这也解释了为什么 Jordan 型的计算本质上只是「求若干核链」。
