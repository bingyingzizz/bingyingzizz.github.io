# 有余极限时 Kan 延拓总存在　`prop.kan-extension-exists`　·　说明
根 `../`

唯一性来自余极限的泛性质，自然性两边都是余锥的映射，逐点验证即可 ✓。
于是 $\operatorname{Hom}(p_{!}F, G) \cong \operatorname{Hom}(F, G \circ p)$ ✓，即 $p_{!} \dashv p^{-1}$ ✓。∎

⭐ 用处：**预层范畴的完备性/余完备性把 Kan 延拓变成自动的**。取 $\mathcal{D} = \mathbf{Set}$ 就得到「任何函子在预层范畴之间都诱导一对伴随」—— 这正是「任意函子诱导拓扑斯态射」的引擎。

⚠️ 公式里的余极限**不能随手换成「沿 $\mathcal{C}$ 取」**：索引范畴是逗号范畴 $p \downarrow X'$，它的对象会随 $X'$ 变化。
