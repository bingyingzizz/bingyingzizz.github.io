# Transpose of a Matrix　`def.transpose`
English entry · root `../`
[in graph](../#n=def.transpose)　·　[Chinese page (authoritative)](./def.transpose.md)

**Basic properties**: $(A+B)^{T} = A^{T} + B^{T}$, $(cA)^{T} = cA^{T}$, $(A^{T})^{T} = A$, and most importantly

$$(AB)^{T} = B^{T} A^{T}$$

(the order of multiplication **reverses**.) If $A$ is invertible, then $A^{T}$ is invertible and $(A^{-1})^{T} = (A^{T})^{-1}$.

## Notes · **draft**
**Why the order of multiplication reverses**: the transpose is not "a rearrangement"; it is **duality**.

A linear map $T : V \to W$ induces the dual map $T^{*} : W^{*} \to V^{*}$ (with the arrow reversed), and the matrix of $T^{*}$ is exactly the transpose of the matrix of $T$.

> continued in nodes/def.transpose.en.3.md
