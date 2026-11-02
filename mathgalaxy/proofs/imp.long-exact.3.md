# 短正合列 $\implies$ 长正合列
`imp.long-exact` · 推出 · strong 边 · 根 `../`

`def.distinguished-triangle` 导出三角 + `def.cohomology` 同调 + `prop.triangle-rotation` 三角的旋转与延拓 → `thm.long-exact` 长正合列

**连接同态 $\delta$ 是从哪来的。** 它就是三角里的第三条腿 $M \to K[1]$ 取同调之后的样子：一个 $H^{n}(M) \to H^{n+1}(K)$ 的映射，把「$M$ 里的元素」送上「$K$ 的下一个同调」。它之所以存在，唯一的原因就是**映射锥给了第三条腿** —— 短正合列本身只给出前两条腿。∎

> 经典证明用蛇引理，这里用映射锥 + 旋转。两条路都通，但后者的好处是：**连接同态是什么**这件事，一眼就能看出来。
