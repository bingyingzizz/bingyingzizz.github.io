# 全有界　`def.totally-bounded`　·　续页（第 3 页）
[在星图里打开](../#n=def.totally-bounded)　·　第 1 页 [nodes/def.totally-bounded.md](./def.totally-bounded.md)　·　上一页 [nodes/def.totally-bounded.2.md](./def.totally-bounded.2.md)

## 陈述（续）
**⚠️ 三条要分清**（这是最容易被混掉的地方）：

| 说法 | 要求 | 名字 |
|---|---|---|
| 每个序列有 **Cauchy** 子列 | 极限可以**不存在** | **全有界**（本节点） |
| 每个序列有**收敛于 $X$ 中**的子列 | 要求 $X$ 完备才能由全有界推出 | **紧**（$=$ 全有界 $+$ 完备） |
| 每个序列有收敛子列（极限在 $X$ 里） | 等价于上一行 | **序列紧**（`def.sequentially-compact`） |
所以：**全有界是「Cauchy 层面」的紧性，紧是「完备化之后」的全有界**。这正是「紧 $=$ 全有界 $+$ 完备」这条分解的来历 —— 全有界负责「有子列可缩」，完备负责「缩到的那点是空间里的点」。

> 续见 [nodes/def.totally-bounded.4.md](./def.totally-bounded.4.md)
