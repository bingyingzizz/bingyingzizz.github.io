# 子范畴　`def.subcategory`　·　说明
根 `../`

⚠️ **子范畴不等于满子范畴**：满子范畴是「对象取一部分，但态射一个不丢」；一般子范畴允许同时丢掉态射。

**严格（strict）子范畴**：恒等态射在子范畴里也必须是恒等态射。绝大多数场合默认如此。

**例子**：$\mathbf{Ab} \hookrightarrow \mathbf{Grp}$ 是满子范畴（阿贝尔群之间的同态恰好就是它们作为群的同态）；$\mathbf{CHaus} \hookrightarrow \mathbf{Top}$ 是满子范畴；$\mathbf{Grp} \to \mathbf{Set}$ 不是子范畴（连对象都不是同一批集合）。

⭐ 「反射子范畴」「余反射子范畴」都是在满子范畴上再加一条：含入函子有伴随。
