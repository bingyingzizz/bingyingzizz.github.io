# 单纯形范畴　`def.simplex-category`　·　说明
根 `../`

**为什么要它**：单纯对象就是 $\Delta^{\mathrm{op}}$ 上的图（见「单纯对象」）。这一条把「一个空间在 $n$ 维的骨架」组织成范畴语言 —— $[n]$ 是 $n$-单形，面映射是「取第 $i$ 个面」，退化映射是「把单形压扁」。

**每个态射都有唯一的单-满分解**：单调映射 $f : [m] \to [n]$ 唯一地写成

$$[m] \twoheadrightarrow \operatorname{im}(f) \hookrightarrow [n],$$

即先做满射（在每根纤维里只留一个代表），再做单射。满射段是一串退化映射的复合，单射段是一串面映射的复合 —— 这就是下面「两族生成」的确切含义。

**完整单纯恒等式**（本图取 $\delta^{i}$ 跳过 $i$、$\sigma^{i}$ 合并 $i,i+1$ 的约定）：

- $\delta^{j}\delta^{i} = \delta^{i}\delta^{j-1}$（$i < j$）；

- $\sigma^{j}\sigma^{i} = \sigma^{i}\sigma^{j-1}$（$i < j$）；

- $\sigma^{j}\delta^{i} = \delta^{i}\sigma^{j-1}$（$i < j$）；

- $\sigma^{j}\delta^{i} = 1$（$i = j$ 或 $i = j+1$）；

- $\sigma^{j}\delta^{i} = \delta^{i-1}\sigma^{j}$（$i > j+1$）。

> 续见 notes/def.simplex-category.2.md
