# 实 Banach 在紧 Hausdorff 上零调　`thm.real-banach-chaus-acyclic`　·　说明
根 `../`

⭐ **这是 §8.2 的主定理**，也是整章的枢纽：它把「零调」从 Stone 空间推到了一般紧 Hausdorff 空间，代价是系数必须落在实 Banach 空间里。

**证法**。① 用 Stonean 空间 $S_{0}$ 满射到 $S$（由「紧 Hausdorff 空间沿闭含入的滤过余极限 / Stonean 覆盖」那套技术得到）；② 在 $S_{0}$ 上由「Banach 在 Stone 上零调」知道 Čech 复形零调；③ 比较 $S_{0} \to S$ 的 Čech 复形与 $S$ 本身的上同调，偏差项住在 $C(K, V)$ 里；④ 用 **Tietze 延拓（Banach 值）** 把偏差压掉，得到 $S$ 上的**有界**零调；⑤ 用「$K$-有界零调 $\implies$ 零调」转成通常零调。

⚠️ **复 Banach 空间不成立。** 这是「solid 模 / solid 拟凝聚层」那一整套理论出现的直接原因之一 —— 实的情形能用 Tietze 那样的**序结构**（$\mathbb{R}$ 上的上确界、分割）把它压下来，复的情形没有这套工具，得上完全不同的机器。

> 续见 notes/thm.real-banach-chaus-acyclic.2.md
