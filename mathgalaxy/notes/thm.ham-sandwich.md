# 火腿三明治定理　`thm.ham-sandwich`　·　说明
根 `../`

**证明（由 Borsuk–Ulam）**：平面由单位法向 $u \in S^{2}$ 与偏移 $t \in \mathbb{R}$ 决定，记 $P(u, t) := \{\, x : \langle x, u\rangle = t \,\}$。对固定 $u$，函数 $t \mapsto \operatorname{vol}(A_{i} \cap \{\langle x, u\rangle \le t\})$ 连续、从 $0$ 增到 $\operatorname{vol}(A_{i})$，故存在唯一的 $t_{i}(u)$ 平分 $A_{i}$；且 $t_{i}(-u) = -t_{i}(u)$（法向反向，平面不变而「正侧」互换）。

于是 $u \mapsto (t_{1}(u) - t_{3}(u),\ t_{2}(u) - t_{3}(u)) \in \mathbb{R}^{2}$ 是连续映射，由 **Borsuk–Ulam**（`thm.borsuk-ulam`），存在 $u$ 使 $f(u) = f(-u) = -f(u)$，即 $f(u) = 0$，也就是 $t_{1}(u) = t_{2}(u) = t_{3}(u)$ —— 同一个平面同时平分三块。∎

⭐ **它是本图最靠外的「应用端」**：辐角原理 $\to$ 绕数 $\to$ Brouwer $\to$ Borsuk–Ulam $\to$ 火腿三明治，一条链把「数零点」和「切三明治」接了起来。这类跨尺度连接正是把图画成星图的理由。

> 续见 notes/thm.ham-sandwich.2.md
