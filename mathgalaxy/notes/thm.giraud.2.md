# Giraud 定理　`thm.giraud`　·　说明
根 `../`

- (1) $\implies$ (2)：**从公理推层论**。用拓扑斯内部的正合性与小生成元，验证「标准拓扑下的层都可表」—— 这一步要用 **①（小生成元）与 ③（任意余极限）**，也是四条里最技术的一环。
- (2) $\implies$ (3)：**从层论推表示**。取 \(\mathcal{C}\) 为小生成元全体、\(J\) 为标准拓扑（"\(R\) 覆盖 \(\iff\) \(\coprod_{Y\in\mathcal{C}/R}\underline Y \to \underline X\) 满"），则 \(\mathcal{T} \simeq \widehat{\mathcal{C}}\)。**这一步就是「拓扑斯 = 层范畴」的定义展开**，需要小生成元来保证 \(\mathcal{C}\) 是小范畴。
- (3) $\implies$ (4)：**从层范畴推反射**。\(\widehat{\mathcal{C}}\) 是 \(\mathbf{Set}^{\mathcal{C}^{\mathrm{op}}}\) 的反射子范畴（层化 \(\mathbf{a} \dashv \iota\)），而层化**保有限极限**（这是 Grothendieck 拓扑的核⼼性质）。**注意“反射正合”不能弱成“有反射”** —— 任意反射子范畴都不正合，正合性正是“层”的特征。
- (4) $\implies$ (1)：**从反射推公理**。反射正合给出有限极限（反

> 续见 notes/thm.giraud.3.md
