# 群扩张　`def.group-extension`　·　说明
根 `../`

**三类扩张，分别由不同的东西管**：
- **分裂的**（有群同态截面 $G \to E$）：$E \cong A \rtimes_{\varphi} G$；分裂扩张**本身只有一个同构类**；$H^{1}(G, A)$ 管的是**截面的选择**（固定半直积下截面的共轭类）。
- **一般的**：由 $H^{2}(G, A)$ 管（见「二维上同调分类群扩张」）。
- **$G$ 在 $A$ 上作用平凡**：此时 $H^{2}(G, A) \cong \operatorname{Ext}^{1}_{\mathbb{Z}}(G^{\mathrm{ab}}, A) \oplus \operatorname{Hom}(H_{2}(G), A)$（见 `thm.h2-group-extensions`）—— $\operatorname{Ext}^{1}$ 只是其中**一部分**，另一部分 $\operatorname{Hom}(H_{2}(G), A)$ 记的是「中心扩张而非阿贝尔扩张」的那类拼法；只有 $H_{2}(G) = 0$（如自由群）时才退化为 $\operatorname{Ext}^{1}$。

⭐ **抽象层面的意义**：$H^{2}(G, A)$ 就是「$A$ 与 $G$ 拼成一个群」的所有拼法；$H^{1}$ 管的是「拼好之后截面还能怎么挪」。
